function SkeletonWallet() {
  return (
    <div className="animate-pulse mx-auto space-y-4">
      <div>
        <div className="h-6 w-1/2 mx-auto rounded bg-slate-500 mb-3"></div>
        <div className="h-4 w-1/3 mx-auto rounded bg-slate-500"></div>
      </div>
      <div className="my-10 space-y-4">
        <div className="rounded-full mx-auto bg-slate-700 h-20 w-20"></div>
        <div className="h-3 w-1/3 mx-auto rounded bg-slate-500"></div>
        <div className="h-10 w-1/2 mx-auto rounded bg-slate-500"></div>
        <div className="h-4 w-1/3 mx-auto rounded bg-slate-500"></div>
      </div>
    </div>
  )
}

export default SkeletonWallet;