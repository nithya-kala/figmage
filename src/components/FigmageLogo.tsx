import React from "react"
import { useMantineTheme } from "@mantine/core"

interface MantineLogoProps extends React.ComponentPropsWithoutRef<"svg"> {
  variant?: "white" | "default"
  width?: number
}

export function FigmageLogo({
  variant = "default",
  width = 110,
  ...others
}: MantineLogoProps) {
  const theme = useMantineTheme()
  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 623 163"
      width={width}
    >
      <text x="0" y="120" fontSize="10em">
        Figmage
      </text>
    </svg>
  )
}
