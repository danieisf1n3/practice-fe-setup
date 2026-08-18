import type { ApiResponse } from '@app/shared-types';

export class HttpClient {
  constructor(private baseUrl: string, private getToken?: () => string | null) {}

  private async request<T>(path: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const token = this.getToken?.();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, string>) ?? {}),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${this.baseUrl}${path}`, { ...options, headers });
    const body = await response.json();

    if (!response.ok) {
      throw body;
    }

    return body as ApiResponse<T>;
  }

  get<T>(path: string) {
    return this.request<T>(path, { method: 'GET' });
  }

  post<T>(path: string, data: unknown) {
    return this.request<T>(path, { method: 'POST', body: JSON.stringify(data) });
  }

  put<T>(path: string, data: unknown) {
    return this.request<T>(path, { method: 'PUT', body: JSON.stringify(data) });
  }

  delete<T>(path: string) {
    return this.request<T>(path, { method: 'DELETE' });
  }
}
