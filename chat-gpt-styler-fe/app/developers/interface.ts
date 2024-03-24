export interface DevsTypes {
  key: number,
  pfpSrc: string,
  name: string,
  role: string,
  bio: string,
  linkedIn: string,
  gitHub: string,
  portfolio?: string
}

export interface DevBiosTypes {
  Devs: DevsTypes[]
}
