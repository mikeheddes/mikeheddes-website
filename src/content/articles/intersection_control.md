---
title: Intersection Control Algorithm
authors:
  - Mike Heddes
  - Niels Gräfe
description: Minimize waiting for traffic lights
image: ../../assets/ica-cover.jpg
imageMeta:
  title: Somewhere
  credits: Photo by Firdouss Ross on Unsplash
publishedAt: 2018-01-08
theme: day
color: red
---

The Intersection Control Algorithm (ICA) will be made to minimize
the time you need to wait for the light to turn green.
The algorithm has to work for a wide range of intersections to be able to deploy it globally.
The first step is advising speed to (non)-autonomous vehicles driving towards an intersection.
After that we’ll minimize the use of traffic lights and head towards a
fluent flow of vehicles crossing intersections without traffic lights.

## Lane Score Algorithm

### Current Traffic Light Systems

The way traffic lights currently work has been around for at least 30 years, since then traffic has grown a lot. The current technology that is used to manage traffic lights is not very efficient. The traffic lights switch at predetermined intervals, these intervals have to be manually made for every intersection which is very time consuming.

### The Score Algorithm

In order to give each lane a priority score the intersection communicates with the vehicles driving towards the intersection. The score is then calculated based on the amount of vehicles on a lane, the distance of each vehicle to the intersection and the time a vehicle is waiting. All these factors have a weight, these weights can be manipulated to balance the algorithm. More factors with weights can be added easily, emergency vehicles can be given an infinite weight for example.

### Implementation

The video below is the first implementation of the score algorithm. The score of each lane is shown at the bottom right. The traffic lights are still switching at predetermined intervals but are now switching to the lane with the highest priority score. The next version will calculate the priority score for each lane a couple of seconds a head. That is needed to combine the score algorithm with Prototype V2 so each vehicle get’s the correct advise speed.

### Distance Weight Formula

The formula below is used to calculate the weight of the lane by distance. The closer a vehicle is to the intersection, the bigger the weight for that lane. The average coverage of a vehicle communication system is 300 meter, so we decided to start
counting the weight from 300 meter ($D$).


$$
D=-\left(\frac{1}{300}\right)^{3}\cdot(x - 300)^{3}
$$
$$
\left(\!
    \begin{array}{c}
      n \\
      r
    \end{array}
  \!\right) = \frac{n!}{r!(n-r)!}
$$

### Score Algorithm Code

```python
TL[laneID] = distanceWeight(lane, laneID) + stopWeight(lane)
def stopWeight(lane):
    stopWeight = 0.01
    return np.sum(waitingFrames[lane]) * stopWeight

def distanceWeight(lane, laneID):
    distanceWeight = 0.5
    imaginaryDistance = 300
    imaginaryDistanceWeight = 0
    distance = np.power(1 / imaginaryDistance, 3) * np.power(distance(laneID, x, y) - imaginaryDistance, 3)
    return np.sum(-distance , lane) * distanceWeight

def softmax(z):
    z -= np.amax(z)
    return np.exp(z) / np.sum(np.exp(z))

def distance(laneID, x, y):
    tlPosition = np.asarray(traci.lane.getShape(laneID)[1])
    delta = np.subtract(tlPosition, [x, y])
    return np.sqrt(np.add(np.power(delta[0], 2), np.power(delta[1], 2)))
```
