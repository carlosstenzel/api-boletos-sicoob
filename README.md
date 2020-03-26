# API para boletos do sicoob

Api em node.js para emisão de boletos do sicoob com registro online

This api serves to assist in its implementation in other systems.

### Fields

All fields required to submit

**numCliente**

- Customer number
- Only numbers

**coopCartao**

- Sicoob agency (Without digit)
- Only numbers

**chaveAcessoWeb**

- Key web
- Ex(XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)

**numContaCorrente**

- Number account (With digit)
- Only numbers

**codMunicipio**

- City code (View File codMunicipio.xls)
- Only number

**codEspDocumento**

- Document Type Code
- Ex:
  - [x] DM = Duplicata Mercantil
  - [ ] CH = Cheque
  - [ ] DMI = Duplicata Mercantil p/ Indicação
  - [ ] DS = Duplicata de Serviço
  - [ ] DSI = Duplicata de Serviço p/ Indicação
  - [ ] DR = Duplicata Rural
  - [ ] LC = Letra de Câmbio
  - [ ] NCC = Nota de Crédito Comercial
  - [ ] NCE = Nota de Crédito a Exportação
  - [ ] NCI = Nota de Crédito Industrial
  - [ ] NCR = Nota de Crédito Rural
  - [ ] NP = Nota Promissória
  - [ ] NPR = Nota Promissória Rural
  - [ ] TM = Triplicata Mercantil
  - [ ] TS = Triplicata de Serviço
  - [ ] NS = Nota de Seguro
  - [ ] RC = Recibo
  - [ ] FAT = Fatura
  - [ ] ND = Nota de Débito
  - [ ] AP = Apólice de Seguro
  - [ ] ME = Mensalidade Escolar
  - [ ] PC = Parcela de Consórcio
  - [ ] NF = Nota Fiscal
  - [ ] DD = Documento de Dívida
  - [ ] BDP = Boleto de Proposta

**dataEmissao**

- Issuance date
- Only number
- Ex: 20200103

**seuNumero**

- Control Number
- Ex invoice number

**nomeSacador**

- Nome do Sacador/Avalista

**numCGCCPFSacador**

- CPF or CNPJ Sacador

**qntMonetaria**

- Monetary Amount

**valorTitulo**

- Billing amount

**codTipoVencimento**

- Código tipo vencimento
- VALUE = 1

**dataVencimentoTit**

- Data vencimento

**valorAbatimento**

- Valor do Abatimento
- VALUE = 0

**valorIOF**

- Valor do IOF a ser Recolhido
- VALUE = 0

**bolAceite**

- Aceite
- VALUE = 1

**percTaxaMulta:**

- Percentual taxa multa
- VALUE = 0

**percTaxaMora**

- Percentual taxa mora
- VALUE = 0

**dataPrimDesconto**

- Data primeiro desconto

**valorPrimDesconto**

- Valor primeiro desconto
- VALUE = 0

**dataSegDesconto**

- Data segundo desconto

**valorSegDesconto**

- Valor segundo desconto
- VALUE = 0

**descInstrucao1**

- Instrução 1 de Desconto

**descInstrucao2**

- Instrução 2 de Desconto

**descInstrucao3**

- Instrução 3 de Desconto

**descInstrucao4**

- Instrução 4 de Desconto

**descInstrucao5**

- Instrução 5 de Desconto

**nomeSacado**

**dataNascimento**

**telefone**

**ddd**

**ramal**

**bolRecebeBoletoEletronico**

**email**

**cpfCGC**

**endereco**

**bairro**

**cidade**

**cep**

**uf**
