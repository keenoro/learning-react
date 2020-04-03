import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // Combines componentDidMount and componentDidUpdate
  // Only runs the arrow function if the [resource] changes
  useEffect(
    () => {
      (async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data)
      })(resource)
    }, 
    [resource]
  );

  return resources;
}

export default useResources;