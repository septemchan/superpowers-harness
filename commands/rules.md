Quick rule management for .claude/rules/.

Usage:
- /rules — List all current rules with source and date
- /rules check — Check rule health (contradictions, stale rules, never-triggered rules)
- /rules suggest — Based on instincts in .claude/instincts/, recommend new rules
- /rules add <description> — Interactively add a rule to .claude/rules/, auto-tag with source and date

When adding rules, follow these standards:
- Positive language ("Write 15-25 characters" not "Don't exceed 25")
- Include reasoning ("because...")
- Use range constraints ("25-35 frames" not "max 35")
- Tag with origin: <!-- Added: YYYY-MM-DD | Reason: ... -->

For deep diagnosis (why a rule isn't working, escalation chain), use PWF or OpenSpec instead.
