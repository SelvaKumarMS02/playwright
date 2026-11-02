const process = (globalThis as typeof globalThis & {
    process: { env: Record<string, string | undefined> };
}).process;

export const ENV_CONFIG = {
   
    BASE_URL: process.env.BASE_URL!,
    
};