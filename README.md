# Controle de Vendas

Um aplicativo web para controle e análise de vendas, desenvolvido com React, TypeScript e Vite. Permite visualizar resumos de vendas, listar vendas por período e visualizar detalhes individuais de vendas, incluindo gráficos interativos.

## Funcionalidades

- **Resumo de Vendas**: Visualização geral das vendas com gráficos e métricas
- **Lista de Vendas**: Navegação por vendas filtradas por data
- **Detalhes da Venda**: Visualização detalhada de uma venda específica
- **Gráficos Interativos**: Utiliza Recharts para exibir dados de vendas de forma visual
- **Interface Responsiva**: Design adaptável para diferentes dispositivos

## Tecnologias Utilizadas

- **React 19**: Biblioteca para construção da interface
- **TypeScript**: Tipagem estática para JavaScript
- **Vite**: Ferramenta de build rápida para desenvolvimento
- **React Router DOM**: Roteamento para navegação entre páginas
- **Recharts**: Biblioteca para criação de gráficos
- **ESLint**: Linting para manter a qualidade do código

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/controle-de-vendas.git
   cd controle-de-vendas
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador em `http://localhost:3000`

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run lint`: Executa o linter para verificar o código
- `npm run preview`: Visualiza a build de produção localmente

## Estrutura do Projeto

```
src/
├── Components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── Slidenav.tsx    # Navegação lateral
│   ├── GraficoVendas.tsx # Componente de gráfico
│   └── ...
├── Context/            # Contextos React para estado global
│   └── DataContext.tsx
├── Hooks/              # Hooks customizados
│   └── useFetch.tsx
├── Pages/              # Páginas da aplicação
│   ├── Resumo.tsx      # Página de resumo
│   ├── Vendas.tsx      # Lista de vendas
│   └── Venda.tsx       # Detalhes da venda
└── assets/             # Recursos estáticos
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
