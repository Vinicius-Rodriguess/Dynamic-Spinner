# 🔄 **Spinner Personalizável em TypeScript**

Um spinner simples e totalmente personalizável desenvolvido em TypeScript. Este projeto permite que você crie uma animação de carregamento adaptável às suas necessidades.

---

## 🚀 **Funcionalidades**

- **Início e Parada**: Controle total do spinner com os métodos `start` e `stop`.
- **Recarregar**: Recarregue o spinner com o método `reload`.
- **Personalização de Cores**: Altere as cores do spinner, fundo e bordas.
- **Velocidade Ajustável**: Controle a velocidade de rotação do spinner.
- **Tamanho Configurável**: Defina altura e largura para o spinner.
- **Direção de Rotação**: Escolha entre rotação para a direita ou esquerda.
- **Raio Ajustável**: Personalize o raio para criar formas exclusivas.

---

## 🛠️ **Métodos Disponíveis**

- `start()`: Inicia o spinner.
- `stop()`: Para o spinner.
- `reload()`: Recarrega o spinner.
- `setColor(color: string)`: Define a cor do spinner.
- `getColor(): string`: Retorna a cor atual do spinner.
- `setBgColor(color: string)`: Define a cor de fundo do spinner.
- `getBgColor(): string`: Retorna a cor de fundo atual.
- `setBgBorderColor(color: string)`: Define a cor da borda de fundo do spinner.
- `getBgBorderColor(): string`: Retorna a cor da borda de fundo atual.
- `setSpeed(speed: number)`: Define a velocidade de rotação do spinner.
- `getSpeed(): number`: Retorna a velocidade de rotação atual.
- `setSize(height: number, width: number)`: Define o tamanho do spinner.
- `getSize(): string`: Retorna o tamanho atual do spinner.
- `setDirection(direction: "l" | "r")`: Define a direção de rotação do spinner.
- `getDirection(): string`: Retorna a direção de rotação atual.
- `setRadius(radius: number)`: Define o raio do spinner.
- `getRadius(): number`: Retorna o raio atual do spinner.

---

## 🔧 **Como Usar**

<a href="https://vinicius-rodriguess.github.io/Dynamic-Spinner/">Clique aqui para experimentar!</a>

Ou então:

1. Inclua o arquivo `spinner.ts` no seu projeto.

2. Instancie um novo spinner:
   ```typescript
   const spinner = new Spinner();
   ```

3. Inicie o spinner:
   ```typescript
   spinner.start();
   ```

4. Personalize conforme necessário:
   ```typescript
   spinner.setColor("blue");
   spinner.setSpeed(2);
   spinner.setDirection("l");
   spinner.setSize(100, 100);
   ```

5. Pare o spinner quando não for mais necessário:
   ```typescript
   spinner.stop();
   ```

---

## ✅ **Melhorias Futuras**

- Adicionar suporte a diferentes formatos de animação.
- Implementar temas predefinidos para o spinner.
- Criar opção de exportar configurações como um arquivo JSON.

---

## 👨‍💻 **Autor**

**Vinicius Rodrigues**

- GitHub: [Vinicius-Rodriguess](https://github.com/Vinicius-Rodriguess)
- Email: rodrigues.vini.2004@gmail.com

