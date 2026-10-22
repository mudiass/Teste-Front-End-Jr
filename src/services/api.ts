import type { ProductsApiResponse } from '../types/product';
import fallbackData from '../data/produtos.json';

const PROXY_URL =
  '/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const DIRECT_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const LOCAL_STATIC_URL = '/produtos.json';

export async function fetchProducts(): Promise<ProductsApiResponse> {
  const endpoints = [PROXY_URL, DIRECT_URL, LOCAL_STATIC_URL];

  for (const url of endpoints) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: ProductsApiResponse = await response.json();
        if (data && Array.isArray(data.products) && data.products.length > 0) {
          return data;
        }
      }
    } catch {
      // Continue to next fallback endpoint
    }
  }

  // Final fallback to bundled data to guarantee vitrine always loads
  return fallbackData as ProductsApiResponse;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);
}
