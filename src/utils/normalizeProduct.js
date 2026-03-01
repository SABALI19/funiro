const getApiBase = () => import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api';

const getApiOrigin = () => {
  try {
    return new URL(getApiBase()).origin;
  } catch {
    return 'http://localhost:5000';
  }
};

const toImageUrl = (value) => {
  if (!value || typeof value !== 'string') {
    return '';
  }

  if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:')) {
    return value;
  }

  if (value.startsWith('/uploads/')) {
    return `${getApiOrigin()}${value}`;
  }

  if (value.startsWith('uploads/')) {
    return `${getApiOrigin()}/${value}`;
  }

  if (value.startsWith('/')) {
    return value;
  }

  return `${getApiOrigin()}/uploads/${value}`;
};

export const normalizeProduct = (product = {}) => {
  const rawImages = Array.isArray(product.images) ? product.images : [];
  const images = rawImages.map(toImageUrl).filter(Boolean);
  const image = toImageUrl(product.image || images[0] || '');

  return {
    ...product,
    id: product.id || product._id || '',
    image,
    images: images.length ? images : image ? [image] : [],
  };
};

export const normalizeProducts = (products = []) => {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.map(normalizeProduct);
};
