import { useEffect } from "react"
import { navigate } from "gatsby"

const Index = props => {
  useEffect(() => {
    navigate("/app")
  }, [])

  return null
}

export default Index
