## Workflow Map

Route to the right tool at each stage:

### 1. New Project (audit-driven)
- No .claude/ directory → run /harness-audit for setup guidance
- Has .claude/ → skip to relevant stage

### 2. Requirements
- Fuzzy idea → /discover (PM Skills)
- Requirements clear → /write-prd (PM Skills)

### 3. Design & Development
- Technical design → brainstorming (Superpowers)
- Create skill → skill-creator
- Implementation plan → writing-plans (Superpowers)
- Execute → subagent-driven-development (Superpowers)

### 4. .claude/ Architecture Iteration
- Quick rule add/check → /rules
- Deep diagnosis (why rule fails, escalation) → PWF or OpenSpec
- Prompt quality review → prompt-audit
- Skill not performing → autoresearch
- Periodic health check → /harness-audit

### 5. Quality Assurance (automatic)
- Code edited → quality-gate hook (file-level lint)
- .claude/ .md edited → quality-gate hook (prompt-audit reminder)
- Session ending → completion-guard hook (security check)
- ~50 tool calls → suggest-compact hook
- All operations → observe hook (recording)

### 6. Security Review
- Auth/payment/user data changes → /security-review

### 7. Learning & Health
- Extract patterns → /learn
- Manage rules → /rules
- Compress context → /compact

### Work Mode Routing
- Building .claude/ architecture: harness-audit → /rules → prompt-audit → /harness-audit (iterate)
- Writing code/products: brainstorming → writing-plans → SDD → verification-loop → /security-review (if needed)
