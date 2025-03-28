# Trocador Universal de Fontes

Uma extensão para o Google Chrome que permite alterar a fonte de qualquer site visitado. Com esta extensão, você pode personalizar a experiência de leitura em qualquer página web, aplicando a fonte de sua preferência.

## Funcionalidades

- Altera a fonte de qualquer site visitado
- Persiste a fonte escolhida entre sessões
- Interface simples e intuitiva
- Aplicação imediata das alterações
- Compatível com todas as páginas web

## Como Instalar

### Instalação Local (Desenvolvimento)

1. Clone este repositório ou faça o download dos arquivos
2. Abra o Google Chrome e acesse `chrome://extensions/`
3. Ative o "Modo do desenvolvedor" no canto superior direito
4. Clique em "Carregar sem compactação"
5. Selecione a pasta do projeto

### Instalação via Chrome Web Store (Em breve)

*Nota: A extensão ainda não está disponível na Chrome Web Store. Em breve será publicada.*

## Como Usar

1. Clique no ícone da extensão na barra de ferramentas do Chrome
2. Digite o nome da fonte desejada no campo de texto (ex: "Arial", "Times New Roman", "Helvetica")
3. Clique em "Aplicar Fonte"
4. A fonte será aplicada imediatamente na página atual

## Estrutura do Projeto

```
├── manifest.json        # Configuração da extensão
├── popup-html.html     # Interface do usuário
├── popup-js.js         # Lógica do popup
├── content-js.js       # Script que aplica a fonte nas páginas
├── background-js.js    # Service worker da extensão
└── images/            # Ícones da extensão
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Chrome Extension API

## Permissões

A extensão requer as seguintes permissões:
- `activeTab`: Para acessar a aba atual
- `storage`: Para salvar as preferências do usuário
- `tabs`: Para interagir com as abas do navegador
- `host_permissions`: Para acessar todos os sites

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## Contato

- https://www.linkedin.com/in/aron-alvarenga

## Agradecimentos

- Google Chrome Extensions API
- Comunidade de desenvolvedores de extensões Chrome 