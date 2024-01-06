import { WaitComponent } from '@/components/WaitComponent'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <>
      <Suspense fallback={<div>waiting 100....</div>}>
        <WaitComponent wait={100} />
      </Suspense>
      <Suspense fallback={<div>waiting 200....</div>}>
        <WaitComponent wait={200} />
      </Suspense>
      <Suspense fallback={<div>waiting 400....</div>}>
        <WaitComponent wait={400} />
      </Suspense>
      <Suspense fallback={<div>waiting 100....</div>}>
        <WaitComponent wait={100} />
      </Suspense>
      <Suspense fallback={<div>waiting 900....</div>}>
        <WaitComponent wait={900} />
      </Suspense>
      <Suspense fallback={<div>waiting 100....</div>}>
        <WaitComponent wait={100} />
      </Suspense>
      <fieldset>

        <legend>
          combined <code>Suspense</code>-container
        </legend>
        <Suspense
          fallback={
            <>
              <div>waiting 800....</div>
              <div>waiting 900....</div>
              <div>waiting 1000....</div>
            </>
          }
        >
          <WaitComponent wait={800} />
          <WaitComponent wait={900} />
          <WaitComponent wait={1000} />
        </Suspense>
      </fieldset>
      <Suspense
        fallback={
          <div>waiting 900....</div>
        }
      >
        <WaitComponent wait={900} />
      </Suspense>
    </>
  )
}

export default Page