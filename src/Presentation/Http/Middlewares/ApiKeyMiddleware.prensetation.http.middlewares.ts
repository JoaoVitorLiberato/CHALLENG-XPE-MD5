import { Context } from "elysia";

export const ApiKeyMiddleware = async ({ request, set }: Context) => {
  const API_KEY = request.headers.get("x-api-key");

  if (/\/swagger/.test(request.url)) return;

  if (!API_KEY || API_KEY !== String(process.env.APPLICATION_API_KEY)) {
    set.status = 401;
    return {
      message: "Usuário não autorizado",
    };
  }
};
