export interface LoadUserByEmailRepository {
  loadUserByEmail(email: string): 
}

export namespace LoadUserByEmailRepository {
  export type Result = Promise<{
    userId: number;
    name: string;
    password: string;
  }>
}