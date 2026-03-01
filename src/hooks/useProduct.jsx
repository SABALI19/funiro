import { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';
import { normalizeProducts } from '../utils/normalizeProduct';

 const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axiosInstance.get('furniture/all-furniture');
        const normalizedProducts = normalizeProducts(response.data?.data);
        setProducts(normalizedProducts);
        
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts([]);
        
        if (err.response) {
          setError(`Server Error: ${err.response.status} - ${err.response.data.message || 'Failed to fetch products'}`);
        } else if (err.request) {
          setError('No response from server. Please check your connection.');
        } else {
          setError(err.message || 'Failed to fetch products');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProduct;
