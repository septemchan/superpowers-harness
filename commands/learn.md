Analyze operation records to discover work patterns.

1. Read the last 200 entries from .claude/instincts/.observations.jsonl
2. Identify repeated patterns (corrections you always make, operations that always follow each other, recurring workflows)
3. For each pattern found, present it to the user for confirmation
4. Confirmed patterns are saved as instinct files in .claude/instincts/

Each instinct file has YAML frontmatter: trigger, confidence (0.0-1.0), domain (code-style/testing/workflow/architecture/content/other), source, created date.
