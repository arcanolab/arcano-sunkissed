# Sunkissed — Taverna e Estalagem — módulo para Foundry VTT v14 (dnd5e)

Mapa de batalha da Sunkissed (Westruun, Tal'Dorei) com tudo configurado. Versão 1.3.0, imagens da geração `v4_1118_0400`.

## Instalar no servidor
1. Instale pelo endereço do manifesto: `https://github.com/arcanolab/arcano-sunkissed/releases/latest/download/module.json`. (Ou descompacte `arcano-sunkissed.zip` dentro de `Data/modules/`; a pasta tem de se chamar `arcano-sunkissed`.)
2. Reinicie o mundo e ative o módulo **Sunkissed — Taverna e Estalagem (Arcano Lab)**.
3. Aba **Compêndios** → **Sunkissed — Taverna e Estalagem** → abra a aventura → **Importar**.
4. Abra a cena **Sunkissed — Taverna e Estalagem**. Peça F5 aos jogadores.

A aventura traz: 1 cena com 4 níveis (529 paredes e portas, 104 luzes, 14 sons, 29 regiões, 21 tokens), 21 atores, 21 diários e 3 playlists.

## Quem está no mapa
- **Ulf** atrás do balcão do salão.
- **Espiráleo Busca** servindo as mesas do salão.
- **Espirali Melchior** na cozinha.
- **Agente da Fivela** corredor do porão — vigia da Fivela; token OCULTO.
- **Corwin Barkley** no canto do balcão, bebendo sozinho — missão “A dívida do caçula”.
- **Jeremias Sook** na mesa do meio — missão “A carroça que sumiu”.
- **Doutor Dranzel** perto da lareira, com o alaúde — missão “Uma canção para o taberneiro”.
- **Fivela — Marga, a cobradora**: escritório do porão, ao lado da porta do cofre.
- **Fivela — Trinco, o arrombador**: sala oeste do porão, na bancada das fechaduras.
- **Fivela — Dedos, o batedor de carteiras**: dormitório do porão.
- **Bocarra, o jacaré da cisterna** (token 2 × 2, visto de cima): na água da cisterna, debaixo do poço do pátio — token OCULTO.
- **Ulf é o Espiráleo Gholesh**: uma ficha só (ND 11), com a aparência de máscara guardada no token.
- Todo token tem o mesmo nome da ficha; o nome só aparece para o mestre.
- As duas criadas aparecem de uniforme. A aparência verdadeira (Espiráleo) está guardada no token, para o módulo **Arcano Masks & Mirrors** (`arcano-formas`): botão de troca no token ou Shift + clique.
- **Fregueses:** Bertha Meia-Caneca, a carroceira (no balcão, na terceira caneca); Olmo Trigueiro, o fazendeiro (na mesa comprida, tomando ensopado); Sela Vento-Leste, a mensageira (na mesa redonda, comendo com pressa); Pico Três-Dedos, o jogador de dados (na mesa do meio, chamando gente para os dados); Hanna Colmeiro, a viúva (sozinha na mesa do fundo, a caneca intocada).
- **Cavalos no estábulo** (tokens 2 × 2 vistos de cima, ficha própria): Trovão, o cavalo de tração, Cinza, a égua da mensageira, Carvão, o garanhão do dono.
- **Missões secundárias:** *A dívida do caçula* (corwin-barkley); *A carroça que sumiu* (sook); *Uma canção para o taberneiro* (dranzel). Estão na página “Missões secundárias de hoje” do diário do local e na ficha de cada um.
- Dois vagonetes no trilho do porão.

Os tokens ocultos só o mestre vê: clique com o botão direito no token e no olho para revelar.

## Diários
- **Taverna e Estalagem Sunkissed** (pasta de diários “Sunkissed”): só a página *Descrição* aparece para os jogadores; o resto é do mestre. Há um alfinete do diário na rua, diante da porta do salão.
- Este pacote trata Ulf como o Espiráleo Gholesh e o porão como base da Fivela: é a versão da mesa do Arcano Lab, não o texto oficial do cenário.

## Como este módulo é feito
Não edite os arquivos aqui: são gerados por `Battlemaps/Sunkissed_v4/foundry/montar_aventura_sunkissed.py`, a partir de `sunkissed_v4_aplicada.json` (a cena), de `westruun_pt.json` (diários e NPCs) e de `sunkissed_npcs_mundo.json` (fichas). A aventura inteira fica salva em `aventura_sunkissed.json`.

## Aviso
Conteúdo de fã, não oficial. Westruun e Tal'Dorei pertencem à Critical Role / Darrington Press. Contém segredos de mestre. Créditos de modelos e áudio em `CREDITOS.md`.
