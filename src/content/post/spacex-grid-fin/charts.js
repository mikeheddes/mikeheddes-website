import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'
import { useMeasure, useTheme } from '../../../hooks'
import { fluidFont } from '../../../styles/mixins'

import telemetryData from './telemetry-data.json'

const Wrapper = styled.div`
  .recharts-cartesian-grid line {
    stroke: var(--surface);
    stroke-width: 1px;
  }

  .recharts-cartesian-axis-line,
  .recharts-cartesian-axis-tick-line {
    stroke: var(--surface-obvious);
    stroke-width: 2px;
  }

  .recharts-text.recharts-cartesian-axis-tick-value {
    ${fluidFont(11, 13)};
    font-weight: 500;
    fill: var(--text-subtle);
  }

  .recharts-text.recharts-label {
    font-weight: 500;
    fill: currentColor;
  }

  .recharts-curve.recharts-line-curve {
    stroke: var(--primary);
  }
`

const getTickLabelByTime = time => {
  switch (time) {
    case telemetryData.events.apogee:
      return 'Apogee'
    case telemetryData.events.maxq:
      return 'Max q'
    default:
      return
  }
}

const {
  meco,
  boostback_start,
  boostback_end,
  entry_start,
  entry_end,
  landing_start,
} = telemetryData.events

const isEngineOn = time => {
  if (
    time < meco ||
    (boostback_start < time && time < boostback_end) ||
    (entry_start < time && time < entry_end) ||
    landing_start < time
  ) {
    return true
  }

  return false
}

const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
  const label = getTickLabelByTime(payload.value)

  return (
    <text
      x={x}
      y={y}
      stroke={stroke}
      className="recharts-text recharts-cartesian-axis-tick-value"
      textAnchor="middle"
    >
      <tspan x={x} dy="0.75em">
        {payload.value}
      </tspan>
      {label && (
        <tspan x={x} dy="1.2em">
          {label}
        </tspan>
      )}
    </text>
  )
}

export const Velocity = () => {
  const [measure, { width }] = useMeasure()

  const data = useMemo(() => {
    return telemetryData.velocity.map((velocity, i) => {
      const time = telemetryData.time[i]

      if (isEngineOn(time)) {
        return { time, on: velocity }
      }

      return {
        time,
        off: velocity,
      }
    })
  }, [])

  return (
    <Wrapper {...measure}>
      <LineChart
        height={width * 0.5625}
        width={width}
        data={data}
        margin={{ top: 5, right: 5, bottom: 6, left: 5 }}
      >
        <CartesianGrid />
        <XAxis
          dataKey="time"
          type="number"
          ticks={[
            telemetryData.events.maxq,
            telemetryData.events.apogee,
            data[data.length - 1].time,
          ]}
          domain={['dataMin', 'dataMax']}
          tick={CustomizedAxisTick}
        />
        <YAxis type="number" tickCount={5} />
        <Line
          dataKey="on"
          dot={false}
          strokeWidth={2}
          isAnimationActive={false}
        />
        <Line
          dataKey="off"
          dot={false}
          strokeWidth={2}
          strokeDasharray="4 4"
          isAnimationActive={false}
        />
      </LineChart>
    </Wrapper>
  )
}

export const Altitude = () => {
  const [measure, { width }] = useMeasure()
  const theme = useTheme()

  const data = useMemo(() => {
    return telemetryData.altitude.map((altitude, i) => {
      const time = telemetryData.time[i]

      if (isEngineOn(time)) {
        return { time, on: altitude }
      }

      return {
        time,
        off: altitude,
      }
    })
  }, [])

  return (
    <Wrapper {...measure}>
      <LineChart
        height={width * 0.5625}
        width={width}
        data={data}
        margin={{ top: 5, right: 5, bottom: 6, left: 5 }}
      >
        <CartesianGrid stroke={theme.surfaceProminent} />
        <XAxis
          dataKey="time"
          type="number"
          ticks={[
            telemetryData.events.maxq,
            telemetryData.events.apogee,
            data[data.length - 1].time,
          ]}
          domain={['dataMin', 'dataMax']}
          tick={CustomizedAxisTick}
        />
        <YAxis type="number" tickCount={5} />
        <Line
          dataKey="on"
          dot={false}
          strokeWidth={2}
          isAnimationActive={false}
        />
        <Line
          dataKey="off"
          dot={false}
          strokeWidth={2}
          strokeDasharray="4 4"
          isAnimationActive={false}
        />
      </LineChart>
    </Wrapper>
  )
}
