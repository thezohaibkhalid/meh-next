import { ReactElement } from "react"

export interface NavLink {
  name: string
  path: string
}

export interface SocialLink {
  href: string
  icon: ReactElement
  color: string
  shadow: string
}
