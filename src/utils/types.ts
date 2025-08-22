type LinkItem = {
  href: string,
  label: string
}

type PrimaryNavItem = {
  label: string
  href: string,
  children?: never
} | {
  href?: never,
  label: string,
  children: LinkItem[]
}

export type PrimaryNavLinks = (LinkItem & {
  children?: never
} | {
  href?: never,
  label: string,
  children: LinkItem[]
})[]

export type SidebarNavLinks = (LinkItem & {
  children?: never
} | {
  href: string,
  label: string,
  children: (LinkItem & {
    children?: never
  } | {
    href: string,
    label: string,
    children: LinkItem[]
  })[]
})[]

export type IdentifierLinks = LinkItem[]