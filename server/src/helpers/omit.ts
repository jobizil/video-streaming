function omit<T>(obj: T, property: keyof T | (keyof T)[]) {
  // Checks if the property to ignore is an array
  if (Array.isArray(property)) {
    const entries = Object.entries(obj).filter(item => {
      const [key] = item

      return !property.includes(key as keyof T)
    })
    return Object.fromEntries(entries)
  }

  const { [property]: unused, ...rest } = obj
  return rest
}
export default omit
