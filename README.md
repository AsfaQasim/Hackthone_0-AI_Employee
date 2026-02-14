# Spec Driven Agent Development

A systematic methodology for building AI Employees through formal specification, design, and property-based testing.

## Philosophy

Spec Driven Development transforms rough ideas into production-ready AI capabilities through a structured workflow that emphasizes:

- **Formal Correctness**: Define what "correct" means before writing code
- **Property-Based Testing**: Validate behavior across all inputs, not just examples
- **Iterative Refinement**: Move fluidly between requirements, design, and implementation
- **Ground Truth Validation**: User approval gates at each stage ensure alignment

## Workflow

### 1. Requirements → 2. Design → 3. Tasks → 4. Implementation

Each feature follows this progression:

```
Rough Idea → Requirements Document → Design Document → Task List → Implementation → Validation
```

## Directory Structure

### `/Specs`
Active feature specifications in development. Each spec contains:
- `requirements.md` - User stories and acceptance criteria
- `design.md` - Technical design and correctness properties
- `tasks.md` - Implementation checklist with sub-tasks

### `/Skills`
Reusable capabilities that the AI Employee can leverage across features. Think of these as the agent's competency library.

### `/Plans`
High-level strategic roadmaps and multi-feature initiatives that guide overall development direction.

### `/Needs_Action`
Specifications or tasks requiring immediate attention, decisions, or unblocking before progress can continue.

### `/Pending_Approval`
Completed specifications awaiting stakeholder review before moving to implementation.

### `/Approved`
Specifications that have been reviewed and approved, ready for task execution.

### `/Done`
Completed and validated implementations with passing property-based tests.

### `/Logs`
Execution history, test results, and activity tracking for audit and debugging.

### `/Dashboard`
Status overviews, metrics, and progress reports for project visibility.

## Creating a New Spec

Start with a rough idea and let the workflow guide you:

```
"I want the AI to handle customer support tickets"
```

The system will:
1. Extract requirements through guided questions
2. Generate a formal design with correctness properties
3. Create an actionable task list
4. Execute tasks with continuous validation

## Property-Based Testing

Unlike traditional testing that checks specific examples, property-based testing validates universal truths:

**Traditional Test:**
```
assert add(2, 3) == 5
```

**Property-Based Test:**
```
for all integers a, b:
  add(a, b) == add(b, a)  // commutative property
```

This approach catches edge cases and ensures correctness across the entire input space.

## Correctness Properties

Each feature defines formal properties that must hold:

- **Invariants**: Conditions that never change
- **Preconditions**: Requirements before operations
- **Postconditions**: Guarantees after operations
- **State Transitions**: Valid paths through the system

## File Naming Conventions

- Feature directories: `kebab-case` (e.g., `customer-support-routing`)
- Spec files: `requirements.md`, `design.md`, `tasks.md`
- Task format: Markdown checkboxes with status indicators

## Task Status Indicators

```markdown
- [ ] Not started
- [~] Queued
- [-] In progress
- [x] Completed
- [ ]* Optional task
```

## Best Practices

1. **Start Small**: Begin with minimal viable specifications
2. **Iterate Often**: Refine requirements as you learn
3. **Test Properties**: Focus on what should always be true
4. **Validate Early**: Get user approval before moving forward
5. **Document Decisions**: Capture the "why" behind design choices

## Moving Through Stages

```
Specs → Pending_Approval → Approved → (Implementation) → Done
         ↑                    ↓
         └── Needs_Action ────┘
```

Features flow through approval gates, with the ability to flag items needing attention at any stage.

## Getting Started

To create a new feature specification:

1. Describe your rough idea
2. Answer clarifying questions about requirements
3. Review and approve the requirements document
4. Review and approve the design document
5. Execute tasks from the generated task list
6. Validate with property-based tests

The system guides you through each step, ensuring nothing is missed.

## Why This Approach?

Traditional development often jumps straight to code, leading to:
- Unclear requirements
- Missing edge cases
- Brittle tests
- Difficult maintenance

Spec Driven Development inverts this by establishing formal correctness criteria first, then implementing to meet those criteria with mathematical rigor.

The result: AI Employees that behave predictably, handle edge cases gracefully, and can be validated with confidence.
