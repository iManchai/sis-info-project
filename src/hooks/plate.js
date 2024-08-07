import { useEffect, useState } from "react";
import { getImageUrl } from "../controllers/files";
import { getPlate, getPlates } from "../controllers/plates"

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

export function usePlate(id) {
  const [plate, setPlate] = useState(null)

  useEffect(() => {
    const load = async () => {
      const plateData = await getPlate(id)
      const plateWithImage = {
        ...plateData,
        image: plateData.image && await getImageUrl(plateData.image),
        id
      }
      setPlate(plateWithImage)
    }
    load()
  }, [id])

  return plate
}

export function calculatePrice(plate, specifications) {
  let price = Number(plate.price);

  if (specifications.base === 'quinoa') {
    price += 1;
  }

  price += (specifications?.extraProteins?.length ?? 0) * 2;
  price += (specifications?.extraMixIns?.length ?? 0) * 1.5;
  price += (specifications?.extraToppings?.length ?? 0) * 1;

  return price;
}