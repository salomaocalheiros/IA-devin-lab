---
name: plan
description: Modo planejamento — produz um plano numerado sem editar código. Use antes de tarefas grandes ou ambíguas.
---

# Skill: /plan

Você está em **MODO PLANEJAMENTO**.

## Regras
- **NÃO edite código nem crie arquivos.**
- Não rode comandos que modifiquem o repositório.
- Comandos de leitura (`git status`, `ls`, `cat`, `npm run test:run` sem alterar arquivos) são permitidos para inspeção.

## Saída obrigatória (nesta ordem)

1. **Objetivo em uma frase** — reformule a tarefa em português claro.
2. **Contexto atual** — o que já existe no repo relevante à tarefa (arquivos, componentes, testes já cobrindo).
3. **Plano numerado** — passos executáveis, cada um com:
   - Arquivos afetados (paths)
   - Mudança específica (função/linha/comportamento)
   - Comando de verificação (teste/lint/build)
4. **Riscos e alternativas** — o que pode dar errado; 1 alternativa considerada.
5. **Estimativa** — pequeno (<15min) / médio (15-60min) / grande (>1h).
6. **Pergunta final:** "Posso prosseguir com este plano?"

Se faltar informação para planejar, pergunte antes de propor o plano.
