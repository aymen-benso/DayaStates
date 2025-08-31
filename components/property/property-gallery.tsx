"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${title} - Image ${currentImage + 1}`}
          fill
          className="object-cover"
        />

        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        <Button variant="secondary" size="sm" className="absolute bottom-4 right-4 bg-white/80 hover:bg-white">
          <Expand className="h-4 w-4 mr-2" />
          Voir toutes les photos
        </Button>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                currentImage === index ? "border-primary" : "border-transparent"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Miniature ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
