export const pagesPath = {
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash })
  },
  "profile1": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile1' as const, hash: url?.hash })
  },
  "profile2": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile2' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
