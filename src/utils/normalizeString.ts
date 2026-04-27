/* Normaliza uma string removendo acentos, caracteres especiais
  convertendo para minúsculo para buscas precisas.
 */
export function normalizeString(str: string) {
  return str
    .normalize("NFD") // Decompõe caracteres acentuados (ex: á -> a + ´)
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos isolados
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ""); // Remove símbolos especiais, mantendo letras, números e espaços
}
