"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Calculator() {
  const [display, setDisplay] = useState("0")
  const [equation, setEquation] = useState("")
  const [shouldReset, setShouldReset] = useState(false)

  const handleNumber = (num: string) => {
    if (display === "0" || shouldReset) {
      setDisplay(num)
      setShouldReset(false)
    } else {
      setDisplay(display + num)
    }
  }

  const handleOperator = (op: string) => {
    setEquation(display + " " + op + " ")
    setShouldReset(true)
  }

  const handleEqual = () => {
    try {
      const fullEquation = equation + display
      // Note: In a production app, use a proper math parser like mathjs instead of eval
      const result = eval(fullEquation.replace("×", "*").replace("÷", "/"))
      setDisplay(String(result))
      setEquation("")
      setShouldReset(true)
    } catch {
      setDisplay("Error")
      setEquation("")
      setShouldReset(true)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setEquation("")
  }

  const buttons = [
    { label: "AC", type: "clear", className: "text-primary" },
    { label: "+/-", type: "function" },
    { label: "%", type: "function" },
    { label: "÷", type: "operator" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "×", type: "operator" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator" },
    { label: "0", type: "number", className: "col-span-2" },
    { label: ".", type: "number" },
    { label: "=", type: "equal", className: "bg-primary text-primary-foreground hover:bg-primary/90" },
  ]

  return (
    <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl">
      <div className="mb-6 p-4 rounded-xl bg-background/50 border border-border/50 text-right space-y-1">
        <div className="text-xs font-mono text-muted-foreground h-4 overflow-hidden">{equation}</div>
        <div className="text-5xl font-semibold tracking-tighter text-foreground truncate">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <Button
            key={btn.label}
            variant={btn.type === "operator" || btn.type === "equal" ? "default" : "secondary"}
            className={cn(
              "h-16 text-xl font-medium rounded-2xl transition-all active:scale-95",
              btn.type === "operator" && "bg-secondary text-primary hover:bg-secondary/80",
              btn.className,
            )}
            onClick={() => {
              if (btn.type === "number") handleNumber(btn.label)
              if (btn.type === "operator") handleOperator(btn.label)
              if (btn.type === "equal") handleEqual()
              if (btn.type === "clear") handleClear()
            }}
          >
            {btn.label}
          </Button>
        ))}
      </div>
    </Card>
  )
}
