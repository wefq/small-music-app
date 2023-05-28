import type { FC } from 'react'

import { formatTime } from '@/utilities/time-format'

interface TrackProgressProperties {
  left: number
  right: number
  onChange: (event: any) => void
  type?: 'duration' | 'volume'
}

export const TrackProgress: FC<TrackProgressProperties> = ({
  left,
  right,
  type,
  onChange,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type='range'
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />

      <div>
        {type === 'duration'
          ? `${formatTime(left)} / ${formatTime(right)}`
          : `${left} / ${right}`}
      </div>
    </div>
  )
}
