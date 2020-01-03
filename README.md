# api-boletos-sicoob

This api serves to assist in its implementation in other systems.

All fields required to submit
# Fields

numCliente
  - Customer number
  - Max size 15
  - Only numbers

coopCartao
  - Sicoob agency (Without digit)
  - Max size 15 
  - Only numbers

chaveAcessoWeb
  - Key web
  - Max size 25
  - Ex(XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)
  
numContaCorrente
  - Number account (With digit)
  - Max size 15
  - Only numbers

codMunicipio
  - City code (View File codMunicipio.xls)
  - Max size 15
  - Only number

**codEspDocumento**
  - Document Type Code
  - Max size 5
  - [x] DM = Duplicata Mercantil
  - [ ] CH = Cheque
  - [ ] DS = Duplicata de Serviço
  - [ ] PC = Parcela de Consório
  - [ ] OU = Outros
