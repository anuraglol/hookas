# Hookas

Hookas is a registry for most popular React hooks based on the [shadcn](https://ui.shadcn.com/) registry system.

## How to use

Find the hook you want to use and copy the link to install the hook into your project. Please note you should have setup shadcn in your project to use this.

## Hooks

- [useIsOnline](#useisonline) - Check if the user is online
- [useAsyncEffect](#useasynceffect) - Run asynchronous effects safely
- [useElementSize](#useelementsize) - Track element dimensions
- [useClickOutside](#useclickoutside) - Detect clicks outside an element
- [useToggle](#usetoggle) - Toggle boolean states easily
- [useWindowSize](#usewindowsize) - Track window dimensions
- [useIsMounted](#useismounted) - Check if the component is mounted
- [useQuery](#usequery) - Query data
- [useMediaQuery](#usemediaquery) - Check if the user is online
- [useFullscreen](#usefullscreen) - Handle fullscreen mode
- [useMousePosition](#usemouseposition) - Track the mouse position
- [useDebounceFunction](#usedebouncefunction) - Debounce a function
- [useThrottledFunction](#usethrottledfunction) - Throttle a function
- [usePromise](#usepromise) - Handle promises

### useIsOnline

Check if the user is online.

#### Usage

```tsx
import { useIsOnline } from '@/hookas/use-is-online'

function ConnectionStatus() {
  const isOnline = useIsOnline()
  return <div>{isOnline ? 'Online' : 'Offline'}</div>
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-is-online.json
```

### useAsyncEffect

Run an async effect.

#### Usage

```tsx
import { useAsyncEffect } from '@/hookas/use-async-effect'
import { useState } from 'react'

function DataFetcher() {
  const [data, setData] = useState(null)

  useAsyncEffect(async () => {
    const res = await fetch('https://api.example.com/data')
    const json = await res.json()
    setData(json)
  }, [])

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-async-effect.json
```

### useElementSize

Measure the size of an element.

#### Usage

```tsx
import { useElementSize } from '@/hookas/use-element-size'
import { useRef } from 'react'

function ResizableBox() {
  const ref = useRef(null)
  const { width, height } = useElementSize(ref)

  return (
    <div ref={ref}>
      <p>
        Width:
        {width}
        px
      </p>
      <p>
        Height:
        {height}
        px
      </p>
    </div>
  )
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-element-size.json
```

### useClickOutside

Handle click outside events.

#### Usage

```tsx
import { useClickOutside } from '@/hookas/use-click-outside'
import { useRef, useState } from 'react'

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useClickOutside(ref, () => setIsOpen(false))

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && <div>Menu Content</div>}
    </div>
  )
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-click-outside.json
```

### useToggle

Toggle a value.

#### Usage

```tsx
import { useToggle } from '@/hookas/use-toggle'

function ToggleButton() {
  const [isOn, toggle] = useToggle(false)

  return (
    <div>
      <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>
      <span>
        State:
        {isOn ? 'Enabled' : 'Disabled'}
      </span>
    </div>
  )
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-toggle.json
```

### useWindowSize

Get the size of the window.

#### Usage

```tsx
import { useWindowSize } from '@/hookas/use-window-size'

function WindowSizeDisplay() {
  const { width, height } = useWindowSize()

  return (
    <div>
      <p>
        Width:
        {width}
        px
      </p>
      <p>
        Height:
        {height}
        px
      </p>
    </div>
  )
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-window-size.json
```

### useIsMounted

Check if the component is mounted.

#### Usage

```tsx
import { useIsMounted } from '@/hookas/use-is-mounted'
import { useEffect, useState } from 'react'

function MountStatus() {
  const isMounted = useIsMounted()

  return (
    <div>
      Component is
      {isMounted ? 'mounted' : 'not mounted'}
      !
    </div>
  )
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-is-mounted.json
```

### useQuery

Small alternative to @tanstack/react-query.

#### Usage

```tsx
import { useQuery } from '@/hookas/use-query'

function DataFetcher() {
  const { data, error, status, refetch } = useQuery({ fetcher: () => fetch('https://api.example.com/data') })

  return <div>{JSON.stringify(data)}</div>
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-query.json
```

### useMediaQuery

Check if the user is online.

#### Usage

```tsx
import { useMediaQuery } from '@/hookas/use-media-query'

function MediaQueryExample() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-media-query.json
```

### useFullscreen

Handle fullscreen mode.

#### Usage

```tsx
import { useFullscreen } from '@/hookas/use-fullscreen'

function FullscreenExample() {
  const { isFullscreen, toggleFullscreen } = useFullscreen()
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-fullscreen.json
```

### useMousePosition

Track the mouse position.

#### Usage

```tsx
import { useMousePosition } from '@/hookas/use-mouse-position'

function MousePosition() {
  const { x, y } = useMousePosition()
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-mouse-position.json
```

### useDebounceFunction

Debounce a function.

#### Usage

```tsx
import { useDebounceFunction } from '@/hookas/use-debounce-function'

function DebouncedFunction() {
  const debouncedFn = useDebounceFunction((a: number, b: number) => {
    console.log(a, b)
  }, 1000)

  return <button onClick={() => debouncedFn(1, 2)}>Debounce</button>
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-debounce-function.json
```

### useThrottledFunction

Throttle a function.

#### Usage

```tsx
import { useThrottledFunction } from '@/hookas/use-throttled-function'

function ThrottledFunction() {
  const throttledFn = useThrottledFunction((a: number, b: number) => {
    console.log(a, b)
  }, 1000)

  return <button onClick={() => throttledFn(1, 2)}>Throttle</button>
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-throttled-function.json
```

### usePromise

Handle promises.

#### Usage

```tsx
import { usePromise } from '@/hookas/use-promise'

function PromiseExample() {
  const data = usePromise(async () => [{ name: 'Valerii' }], [])

  return (
    <div>
      {data.map(item => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  )
}
```

#### Install

```bash
npx shadcn@latest add https://hookas.letstri.dev/r/use-promise.json
```
