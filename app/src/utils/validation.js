export function isEmpty(value) {
  return value.trim() === "";
}

export function isValidName(value) {
  const trimmed = value.trim();
  return (
    /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[' -][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(trimmed) &&
    trimmed.length >= 2 &&
    trimmed.length <= 30
  );
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPassword(value) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&^#~()-_+=<>.,]{8,}$/.test(
    value.trim()
  );
}
