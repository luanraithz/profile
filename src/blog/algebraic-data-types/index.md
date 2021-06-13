---
title: Tipos de Dados Algébricos
date: 2019-12-22T22:12:03.284Z
description: Separação de domínios e tratamento de erros com foco em tipos
---

### "Do or do not there is no try"

> Os exemplos de código são em Java e OCaml, não é necessário saber nenhum dos dois pra entender o que foi feito.

Em linguagens como OCaml, Haskell e StandardML, conceitos como algebraic data types são a principal forma de representar dados e flow de execução de um programa. Nesse post eu vou tentar demonstrar como esse tipo de visão pode ajudar em qualquer linguagem no controle de erros e resultados de chamadas de funções, tanto imperativas (que envolvem IO, ou alteracoes no estado da aplicação) como puras.  

## O conceito

Criar um novo tipo a partir da composição de outros.

Onde a composição pode ser feita por uma soma (`sum`) ou por um produto (`product`) de tipos.

### Sum types

```ocaml
type carbrand = audi | volkswagen
```
> Uma variável do tipo `carbrand` é `audi` ou `volkswagen`

Sum type pode ser entendi como `ou`.

### Product types

```ocaml
type name = string
type age = int
type person = name * age
```
"Uma pessoa é composta por um nome(name) <strong>e</strong> uma idade(age)"

Diferentemente do tipo anterior (sum), esse tipo é entendido como um <strong>`e`</strong>.

## Aplicação

Após essa rápida introdução conceitual, já se torna válido mostrar a aplicabilidade em controle de fluxo da aplicação e validação de erros.

Em linguagens orientadas a objeto (aqui usado Java), o meio mais comum de controlar "erros" são `exceptions`.

Com o tempo `exceptions` começaram a ser usadas até em casos de uma simples validação.

Exemplo:
```java
public String saveUser(User us) {
    try {
        service.save(us);
        return "Saved!";
    } catch (InvalidAgeException _) {
        return "Invalid age";
    }
}
```

Aqui chegamos no primeiro ponto do texto. `NO EXCEPTIONS`.

[Exceptions deveriam ser realmente EXCEPTIONS](https://www.atlassian.com/blog/archives/exceptions_are_bad).
Usar exceptions para casos como validação de dados subverte até seu nome, no exemplo acima uma validação de idade de uma pessoa é tratado como exception, porém isso é muito mais uma regra de negócio.

Uma perda de conexão com o banco de dados seria uma exception, ou como o post linkado dá o exemplo, alguém removeu o HD da máquina.

Utilizando maneiras mais funcionais de controle de erros, ganhamos formas de controle de execução como [`Railway`](https://vimeo.com/97344498) e uma documentação viva de todos os erros e resultados da aplicação, se todos os erros que uma função pode retornar estão no seu tipo de retorno, quem chama a função precisa tratar todos eles. Uma parte das vantagens citadas também pode ser alcançada por meio de `exceptions`, mas nos força a pensar na execução de uma função de uma maneira diferente, onde começamos a ver fluxos desejáveis (validações, etc) da mesma forma que vemos cenários como `"a máquina ficou sem rede no meio da requesição"`. `Exceptions` ainda vão acontecer, mas queremos deixar o uso dela para casos realmente excepcionais.

Esse tipo de `approach` demonstra a fraqueza do sistema de tipos da linguagem, por não deixar o programador expressar erros de uma maneira menos "barulhenta".

Com os artificios que mostramos anteriormente (expecificamente `sum types`), o código poderia ficar parecido com (OCaml):

```ocaml
let saveUser u =
    let res = (save u) in
        match res with
        | InvalidAge -> "Invalid age"
        | Success -> "Saved!"
```

> Nesse código, fazemos uso de uma funcionalidade muito explorada em programação funcional, onde escolhemos uma ação baseada no tipo de dado que estamos trabalhando com (aka [pattern matching](https://wiki.c2.com/?PatternMatching)).

### Separação de domínios e controle de erros e validações

Com a expressividade desse sistema de tipos a separação de camadas da aplicação fica muito mais clara.

Onde `union types` (ou algebraic data types no geral) são usados, temos os seguintes pontos a ganhar:

* Documentação viva das funções, tendo que exceptions (de verdade) e erros de validação estão separados.
* Garantia de que, se for adicionado mais algum caso de erro, todos os lugares que fazem uso dessa função precisam tratar ou pelo menos ignorar explicitamente.
> A necessidade disso pode variar de projeto pra projeto, existem casos aonde o programador não quer tratar todos os retornos e erros, apenas um ou outro, logo fica explicito no código que os mesmo estão sendo ignorados. `Vai do programador escolher (everthing is a trade-off)`.
* Separação de responsabilidade e tipos de retorno.
> Como mostrado no exemplo anterior, a função de `save` não porta nenhum detalhe sobre mensagens ou status codes, apenas sabe o que produz, tanto os erros como resultados de sucesso, não existe nela nenhuma ideia de que seu resultado vai ser aplicado.

## Referências

* [Exceptions are Bad™](https://www.atlassian.com/blog/archives/exceptions_are_bad)
    > O autor desse artigo dá a sugestão de usar `Maybe` ou `Either`, ambos são tipos de dados algébricos 😉
* [Algebraic Data Types: Things I wish someone had explained about functional programming](https://jrsinclair.com/articles/2019/algebraic-data-types-what-i-wish-someone-had-explained-about-functional-programming/)
* [An Introduction to Algebraic Data Types](https://itnext.io/an-introduction-to-algebraic-data-types-9429e49eac27)
    > O post acima tem exemplos usando Typescript
* [Talk: Railway oriented programming (usando F#)](https://vimeo.com/97344498)

