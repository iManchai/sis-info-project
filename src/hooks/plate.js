import { useEffect } from "react";
import { getImageUrl } from "../controllers/files";
import { getPlates } from "../controllers/plates"

// Hook for fetching plates
export function usePlates() {
  const [plates, setPlates] = useState([])

  useEffect(() => {
    const load = async () => {
      const plates = await getPlates();
      const platesWithImages = await Promise.all(
        plates.map(async (plate) => ({
          ...plate,
          image: plate.image && await getImageUrl(plate.image)
        }))
      )
      setPlates(platesWithImages)
    }
    load()
  }, [])
  
  return plates
}