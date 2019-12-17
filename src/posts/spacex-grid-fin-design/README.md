import { AluminumPropertiesTable, MaxStressTable } from './tables';

SpaceX is the first private company to successfully launch, orbit, and land a rocket. In 2015 SpaceX managed to perform a successful vertical landing with a Falcon 9 first stage for the first time. This was achieved by a number of maneuvers that occur after the first stage separation. The steps are depicted in the [Falcon 9 First Stage Reusability Graphic](https://en.wikipedia.org/wiki/File:Falcon_9_First_Stage_Reusability_Graphic.jpg). SpaceX added grid fins to the first stage of the Falcon 9 to provide the ability to roll, pitch and yaw during aerodynamic guidance by producing lift. This makes it possible to change the trajectory during the aerodynamic translation maneuver towards the landing site.

> The landing at Landing Zone 1 was the first time SpaceX had successfully landed the rocket’s first stage.
>
> [Space News](https://spacenews.com/falcon-9-launches-orbcomm-satellites-first-stage-lands/)

The first version of the grid fin design by SpaceX was made of aluminum and measures 4 by 5 feet. In order to survive the extreme conditions during re-entry, it required a heat shield coating that needed to be applied after each mission. Figure 1 shows the design of the initial grid fins in the contracted state.

<figure>
  <img src="./grid-fin-2015.jpg" alt="Initial design aluminum grid fins, retracted. February 2015" />
  <figcaption>Figure 1: initial design aluminum grid fins, retracted in February 2015</figcaption>
</figure>

SpaceX improved upon their first design and in June 2017 flown their first mission with its new titanium grid fins, shown in Figure 2. The most important improvement is the inherent heat resistance of titanium which eliminated the need for a heat shield coating and allows the grid fins to be “reused indefinitely”.

> The improved version of the grid fin is made out of a single piece cast and cut titanium and is able to resist the re-entry heat without shielding.
>
> It is slightly heavier than the shielded aluminum version but has more control authority and can be reused indefinitely with no touch ups.
>
> [Elon Musk](https://twitter.com/elonmusk/status/878821062326198272)

<figure>
  <img src="./grid-fin-2017.jpg" alt="Close-up of the new titanium grid fins first flown in June 2017" />
  <figcaption>Figure 2: close-up of the newer titanium grid fins first flown in June 2017</figcaption>
</figure>

After decades of stagnation in the space industry, SpaceX stirred up excitement again with its innovations in landing amongst other things, enabling SpaceX to reuse its first stage rocket. To me, this is a fascinating achievement and very inspiring. The grid fin is a critical part of orchestrating the landing of the first stage. Since it is located outside of the rocket, there are sufficient public resources available. Special thanks to Jon Ross for creating a [stunning 3D model](https://sketchfab.com/3d-models/spacex-falcon-9-block-5-grid-fin-a800195f7a654c33b52a3f59773d2632) of the grid fin. An interactive version of the titanium grid fin can be found on the [grid fin playground page](/playground/grid-fin).


<!--
# Stress analysis
To get a realistic view of the maximum stress in a grid fin multiple analysis are made on different times with their corresponding speed and air density, see figure 4 for the two frames with the highest speed and air density combination. The air pressure comes from AVS ([Atmospheric Pressure at Different Altitudes](https://www.avs.org/AVS/files/c7/c7edaedb-95b2-438f-adfb-36de54f87b9e.pdf)). More information on the time, speed and altitude can be found in appendix A.

<figure>
  <MaxStressTable />
  <figcaption>Figure 4: table of frames with a combination of high speed and air density</figcaption>
</figure>

For each frame two angels of the grid fin are analyzed, 0° offset and 45° offset. The material used for the 2015 model grid fin is aluminum 7075-T6 because it has a high tensile strength, can be heat treated and is commonly used in the aerospace industry ([7 things to consider when choosing an aluminum grade](https://www.metalsupermarkets.com/7-things-consider-choosing-aluminum-grade/)). See figure 5 for the [properties of aluminum 7075-T6](http://asm.matweb.com/search/SpecificMaterial.asp?bassnum=MA7075T6).



<figure>
  <AluminumPropertiesTable />
  <figcaption>Figure 5: table with properties of aluminum 7075-T6</figcaption>
</figure>


The results of the analysis show that at T+481 with the grid fin rotated 45° the grid fin has the highest stress. There is a safety factor of 3.5 till the stress is higher than the yield strength and permanent displacement will occur.

## Critical load and stress
During the highest stress on the grid fin the first stage is falling towards Earth with 2.5 times [the speed of sound](https://en.wikipedia.org/wiki/Speed_of_sound) with a surrounding air pressure of 46.61 kPa and a grid fin angle of 45°. The air colliding with the grid fin creates high pressure zones where the air is slowed down from the perspective of the grid fin. See figure 6 for a cross-section of the pressure.

This pressure creates a force on the grid fin which results in stress and displacement. See figure 7 for the stress distribution in the grid fin and figure 8 for the resulting displacement.

<figure>
  <img src="./grid-fin-2015-stress.png" alt="Isometric view stress distribution" />
  <figcaption>Figure 7: isometric view stress distribution</figcaption>
</figure>

<figure>
  <img src="./grid-fin-2015-displacement.png" alt="Isometric view displacement distribution" />
  <figcaption>Figure 8: isometric view displacement distribution</figcaption>
</figure>


## External influence
Heat as a result of friction is an important factor to keep in mind when designing a grid fin. This is also part of why SpaceX went from an aluminum grid fin with heat shielding to a titanium grid fin which doesn’t need heat shielding. The aluminum heat shielding needed to be replaced after every flight while the titanium version can be reused indefinitely.
 
## Fabrication process
The grid fin part is first casted in a very rough block with enough extra material to refine, at least 10 mm up to 50 mm. The second step is to cut a more accurate size but still with some extra material to refine, around 3 mm. The third step is milling the grid to the correct size excluding the six holes. The fourth step is to apply the chemical heat shield. The last step is milling the two bearing shafts with grooves and the six holes with threats.
 
## Conclusion
The design of the grid fin could be described as a grid square of 4 by 5 feet with two reinforcement strokes through the grid that acts as the mount of the grid fin with the booster. The grid fin is fabricated from a block of casted aluminum that is first cut in the rough dimensions and finally refined with a CNC mill machine to get the exact dimensions and to add holes, threads and groves.


# Iridium NEXT 8 telemetry data

Graph 1 and 2 depict the velocity and altitude telemetry data respectively of the Falcon 9 first stage during the Iridium NEXT 8 mission. The data is obtained from [shahar603 on GitHub](https://github.com/shahar603/Telemetry-Data/tree/master/Iridium%20NEXT%208), captured from the original [Iridium NEXT 8 mission webcast](https://youtu.be/VshdafZvwrg).

<figure>
  <figcaption>
    Graph 1: Iridium NEXT 8 first stage velocity data. Absolute velocity [m/s] against flight time [s]. First stage engine on [—], off [- -].
  </figcaption>
  <Velocity />
</figure>

<figure>
  <figcaption>
    Graph 2: Iridium NEXT 8 first stage altitude data. Altitude [km] against flight time [s]. First stage engine on [—], off [- -].
  </figcaption>
  <Altitude />
</figure>

 -->
