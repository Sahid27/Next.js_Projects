import { Calculator } from "@/components/calculator"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Calculator</h1>
          <p className="text-muted-foreground">A sleek, modern calculation tool for your daily needs.</p>
        </div>
        <Calculator />
      </div>
    </main>
  )
}
