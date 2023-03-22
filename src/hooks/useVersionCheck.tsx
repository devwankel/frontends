import { useEffect, useState } from "react"
import { useLocalStorage } from "react-use"

import { requireEnv } from "@/utils"
import { APP_VERSION } from "@/utils/storageKey"

export const VersionChecker = ({ children }: any) => {
  const [versionMatched, setVersionMatched] = useState(false)
  const [version, setVersion] = useLocalStorage(APP_VERSION)

  useEffect(() => {
    const currentVersion = requireEnv("REACT_APP_VERSION")
    if (version !== currentVersion) {
      localStorage.clear()
      setVersion(currentVersion)
    }
    setVersionMatched(true)
  }, [])

  if (!versionMatched) {
    return null
  }

  return children
}
