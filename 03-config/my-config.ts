interface MyConfig {
    PORT: number;
    USER: string;
}

// É possível validar se a variável está definida
// caso não estiver dar emitir erro no processo

export const config = {
    PORT: Number(process.env?.PORT || 3000),
    USER: process.env.USER!
} satisfies MyConfig;

export default config;
