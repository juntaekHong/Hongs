import { useEffect } from "react"
import { navigate } from "gatsby"

const DefaultRoot = props => {
  useEffect(() => {
    navigate("/app/main")
  }, [])

  return null
}

export default DefaultRoot
