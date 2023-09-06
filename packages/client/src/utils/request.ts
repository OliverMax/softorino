interface Arguments {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  path: string;
  requestBody?: Record<string, unknown> | null;
}

export default function request<T>({
  method,
  path = '/',
  requestBody = null,
}: Arguments): Promise<T> {
  return new Promise((resolve, reject) => {
    const {
      VITE_API_PROTOCOL,
      VITE_API_DOMAIN,
      VITE_API_PORT,
    } = import.meta.env;

    const xhr = new XMLHttpRequest();

    xhr.open(
      method,
      `${VITE_API_PROTOCOL}://${VITE_API_DOMAIN}:${VITE_API_PORT}${path}`,
      true,
    );

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 200) {
        resolve(xhr.response);
      }
    };
    xhr.onerror = reject;
    xhr.onprogress = () => {};
    xhr.ontimeout = () => {};
    xhr.onreadystatechange = () => {};
    xhr.onabort = () => {};

    xhr.send(JSON.stringify(requestBody));
  });
}
