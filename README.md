# Simulação de Compra de Ingressos

Este projeto simula a compra de ingressos, permitindo ao usuário selecionar entre diferentes tipos de ingressos (Cadeira Inferior, Cadeira Superior e Pista), escolher a quantidade que deseja comprar e atualizar o total disponível de ingressos por setor. O projeto é desenvolvido com HTML, CSS e JavaScript.

## Funcionalidades

- **Seleção do Tipo de Ingresso**: O usuário pode escolher entre três tipos de ingressos disponíveis: Cadeira Inferior, Cadeira Superior e Pista.
- **Quantidade de Ingressos**: O usuário define a quantidade de ingressos que deseja comprar para o tipo selecionado.
- **Atualização dos Ingressos Disponíveis**: Ao clicar no botão "Comprar", o total de ingressos disponíveis é atualizado dinamicamente para cada setor com base nas compras realizadas.

## Estrutura do Projeto

```bash
ingresso/
│
├── assets/
│   ├── PNG/
│   │   ├── Arrow down.png         # Ícone de seta para baixo (PNG)
│   │   ├── Grafismo verde.png     # Imagem decorativa (PNG)
│   │   ├── Imagem com borda.png   # Imagem decorativa com borda (PNG)
│   │   ├── Imagem sem borda.png   # Imagem decorativa sem borda (PNG)
│   │   ├── Ingresso.png           # Imagem de ingresso (PNG)
│   │   └── Logo e-tricket.png     # Logo da e-ticket (PNG)
│   ├── SVG/
│   │   ├── Arrow down.svg         # Ícone de seta para baixo (SVG)
│   │   ├── Grafismo verde.svg     # Imagem decorativa (SVG)
│   │   ├── Imagem com borda.svg   # Imagem decorativa com borda (SVG)
│   │   ├── Imagem sem borda.svg   # Imagem decorativa sem borda (SVG)
│   │   ├── Ingresso.svg           # Imagem de ingresso (SVG)
│   │   └── Logo e-tricket.svg     # Logo da e-ticket (SVG)
│   ├── imagem1.png                # Imagem decorativa
│   ├── Ingresso.svg               # Outra versão da imagem de ingresso (SVG)
│   └── Logo e-tricket.png         # Outra versão da logo da e-ticket (PNG)
│
├── js/
│   └── app.js                     # Lógica da compra e atualização de ingressos
│
├── styles/
│   ├── _reset.css                 # Estilos de reset para normalização
│   └── style.css                  # Estilos principais da página
│
├── index.html                     # Página principal da simulação de compra de ingressos
└── README.md                      # Documentação do projeto
```

## Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seuusuario/ingresso.git
    ```
2. Abra o arquivo `index.html` em qualquer navegador para acessar a simulação de compra de ingressos.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página e dos componentes.
- **CSS3**: Estilização e layout da interface de usuário.
- **JavaScript (ES6)**: Lógica de compra de ingressos, atualização do total disponível e interação com o usuário.

## Detalhes do Projeto

### Página Principal (`index.html`)

A interface permite que o usuário:
- **Escolha o tipo de ingresso**: Selecione entre "Cadeira Inferior", "Cadeira Superior" e "Pista".
- **Defina a quantidade**: O usuário pode inserir a quantidade de ingressos que deseja para o tipo escolhido.
- **Compre e atualize o total de ingressos disponíveis**: Ao clicar no botão "Comprar", a quantidade de ingressos é subtraída do total disponível e o estoque atualizado é mostrado na página.

### Estilos (`_reset.css` e `style.css`)

- **_reset.css**: Remove estilos padrões de navegadores diferentes, garantindo consistência.
- **style.css**: Define o layout visual, como cores, fontes, espaçamento e ícones. Utiliza imagens decorativas e ícones da pasta `assets`.

### Lógica da Compra (`app.js`)

- O arquivo `app.js` controla toda a lógica de interação:
  - **Seleção de tipo de ingresso**: O JavaScript atualiza a interface para refletir o tipo de ingresso selecionado.
  - **Atualização da quantidade**: Quando o usuário compra ingressos, o total disponível é ajustado para cada tipo de ingresso.
  - **Prevenção de erros**: Garante que o usuário não compre mais ingressos do que o disponível em estoque.

## Personalizações

- **Adicionar mais tipos de ingressos**: Para adicionar novos tipos de ingressos, modifique o `index.html` e ajuste o `app.js` para incluir a lógica de compra e atualização do estoque para os novos setores.
- **Estilos**: Altere o arquivo `style.css` para modificar cores, fontes e disposição dos elementos.