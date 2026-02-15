---
type: system_spec
status: draft
category: automation
risk_level: high
created: 2026-02-15
requires_approval: true
version: 1.0.0
---

# Autonomous Loop Specification

## Overview

An autonomous execution loop that continuously processes tasks until completion, with configurable stop conditions, failure handling, state persistence, and human intervention hooks.

## Purpose

Enable the Personal AI Employee to:
- Execute tasks autonomously until completion
- Stop when task moved to /Done/
- Respect maximum iteration limits
- Handle failures gracefully with thresholds
- Allow human intervention via stop hooks
- Reinject prompts for continuation
- Persist state across interruptions

## Loop Termination Conditions

### 1. Success Condition
**Trigger**: Task file moved to /Done/  
**Action**: Stop loop, log success, clean up state

### 2. Max Iterations
**Trigger**: Iteration count >= max_iterations  
**Action**: Stop loop, create escalation, preserve state

### 3. Failure Threshold
**Trigger**: Consecutive failures >= failure_threshold  
**Action**: Stop loop, create error report, request human help

### 4. Stop Hook
**Trigger**: Stop file created by human  
**Action**: Graceful shutdown, save state, await instructions

### 5. Manual Completion
**Trigger**: Human marks task as complete  
**Action**: Stop loop, archive state, log completion

## Architecture

### Autonomous Loop Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  AUTONOMOUS LOOP START                       │
├─────────────────────────────────────────────────────────────┤
│  Input: Task file path, Configuration                       │
│  Initialize: State file, iteration counter, failure counter │
└─────────────────────────────────────────────────────────────┘
                          ↓
                   ┌──────────────┐
                   │ Load State   │
                   └──────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                    LOOP ITERATION                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Check Stop Conditions                                   │
│     ├─ Task in /Done/? → EXIT SUCCESS                      │
│     ├─ Max iterations? → EXIT MAX_ITERATIONS                │
│     ├─ Failure threshold? → EXIT FAILURE                    │
│     └─ Stop hook exists? → EXIT STOPPED                     │
│                                                              │
│  2. Execute Task Step                                        │
│     ├─ Read current task state                             │
│     ├─ Determine next action                               │
│     ├─ Execute action via Ralph Loop                        │
│     └─ Update task state                                    │
│                                                              │
│  3. Handle Result                                            │
│     ├─ Success → Reset failure counter                      │
│     ├─ Failure → Increment failure counter                  │
│     └─ Partial → Continue                                   │
│                                                              │
│  4. Update State                                             │
│     ├─ Increment iteration counter                          │
│     ├─ Save state to file                                   │
│     ├─ Log iteration result                                 │
│     └─ Check for prompt reinjection                         │
│                                                              │
│  5. Wait Interval                                            │
│     └─ Sleep before next iteration                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                          ↓
                   Loop back to Step 1
                          ↓
                   ┌──────────────┐
                   │  EXIT LOOP   │
                   └──────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                    CLEANUP & FINALIZE                        │
├─────────────────────────────────────────────────────────────┤
│  1. Save final state                                        │
│  2. Generate completion report                              │
│  3. Archive logs                                            │
│  4. Notify human (if needed)                                │
│  5. Clean up resources                                      │
└─────────────────────────────────────────────────────────────┘
```

## Configuration

### Loop Configuration File

```yaml
# /Control/autonomous_loop_config.yaml

autonomous_loop:
  # Stop conditions
  max_iterations: 100
  failure_threshold: 3
  timeout_minutes: 120
  
  # Iteration settings
  iteration_interval_seconds: 5
  backoff_on_failure: true
  backoff_multiplier: 2
  max_backoff_seconds: 60
  
  # State persistence
  state_file: ".state/autonomous_loop_state.json"
  save_state_every_n_iterations: 1
  state_retention_days: 30
  
  # Stop hook
  stop_hook_file: "/Control/STOP_AUTONOMOUS_LOOP"
  check_stop_hook_every_iteration: true
  
  # Prompt reinjection
  reinject_prompt_file: "/Control/reinject_prompt.md"
  check_reinject_every_n_iterations: 5
  
  # Logging
  log_file: "Logs/autonomous_loop.log"
  log_level: "INFO"
  log_every_iteration: true
  
  # Notifications
  notify_on_completion: true
  notify_on_failure: true
  notify_on_max_iterations: true
```

## State File

### State File Format

```json
{
  "loop_id": "loop_20260215_103000",
  "task_path": "/Specs/auth_feature/tasks.md",
  "task_id": "auth_feature",
  "started_at": "2026-02-15T10:30:00Z",
  "last_updated": "2026-02-15T10:35:00Z",
  "status": "running",
  
  "counters": {
    "iterations": 5,
    "max_iterations": 100,
    "consecutive_failures": 0,
    "failure_threshold": 3,
    "total_successes": 4,
    "total_failures": 1
  },
  
  "current_state": {
    "current_task": "1.2 Implement authentication logic",
    "last_action": "write_code",
    "last_result": "success",
    "next_action": "run_tests"
  },
  
  "history": [
    {
      "iteration": 1,
      "timestamp": "2026-02-15T10:30:05Z",
      "action": "read_requirements",
      "result": "success",
      "duration_seconds": 2.3
    },
    {
      "iteration": 2,
      "timestamp": "2026-02-15T10:30:10Z",
      "action": "generate_code",
      "result": "success",
      "duration_seconds": 5.1
    },
    {
      "iteration": 3,
      "timestamp": "2026-02-15T10:30:20Z",
      "action": "run_tests",
      "result": "failure",
      "error": "Test failed: authentication_test.ts",
      "duration_seconds": 8.2
    },
    {
      "iteration": 4,
      "timestamp": "2026-02-15T10:30:30Z",
      "action": "fix_code",
      "result": "success",
      "duration_seconds": 4.5
    },
    {
      "iteration": 5,
      "timestamp": "2026-02-15T10:30:40Z",
      "action": "run_tests",
      "result": "success",
      "duration_seconds": 7.8
    }
  ],
  
  "checkpoints": {
    "last_successful_state": {
      "iteration": 5,
      "task": "1.2 Implement authentication logic",
      "timestamp": "2026-02-15T10:30:40Z"
    }
  },
  
  "metadata": {
    "config_file": "/Control/autonomous_loop_config.yaml",
    "ralph_loop_version": "2.0.0",
    "started_by": "human",
    "can_resume": true
  }
}
```

### State File Location

```
.state/
├── autonomous_loop_state.json          # Current state
├── autonomous_loop_state_backup.json   # Previous state
└── history/
    ├── loop_20260215_103000.json      # Completed loop
    ├── loop_20260214_150000.json      # Completed loop
    └── loop_20260213_090000.json      # Completed loop
```

## Stop Hook

### Stop Hook File

**Location**: `/Control/STOP_AUTONOMOUS_LOOP`

**Format**:
```markdown
---
type: stop_hook
created: 2026-02-15T10:35:00Z
reason: manual
---

# Stop Autonomous Loop

## Reason for Stopping

[Explain why you're stopping the loop]

## Current Status

The loop will stop gracefully after the current iteration completes.

## Next Steps

After stopping:
1. Review state file: `.state/autonomous_loop_state.json`
2. Check logs: `Logs/autonomous_loop.log`
3. Decide next action:
   - Resume: Delete this file and restart loop
   - Modify: Update task and restart
   - Complete: Move task to /Done/

---

**To resume**: Delete this file
**To abort**: Move task to /Rejected/
```

### Stop Hook Detection

```python
def check_stop_hook(self):
    """Check if stop hook file exists"""
    
    stop_hook_path = self.config.stop_hook_file
    
    if os.path.exists(stop_hook_path):
        # Read stop hook
        with open(stop_hook_path, 'r') as f:
            stop_hook = parse_markdown(f.read())
        
        logger.info("Stop hook detected", {
            "reason": stop_hook.get("reason", "unknown"),
            "created": stop_hook.get("created")
        })
        
        # Save state
        self.save_state("stopped")
        
        # Create stop report
        self.create_stop_report(stop_hook)
        
        return True
    
    return False
```

## Prompt Reinjection

### Reinject Prompt File

**Location**: `/Control/reinject_prompt.md`

**Purpose**: Provide additional context or instructions mid-loop

**Format**:
```markdown
---
type: reinject_prompt
created: 2026-02-15T10:40:00Z
priority: high
---

# Reinjected Prompt

## Additional Context

The authentication approach has changed. We're now using OAuth2 instead of JWT.

## Updated Instructions

1. Replace JWT implementation with OAuth2
2. Use the `oauth2-library` package
3. Update tests to match new approach
4. Ensure backward compatibility

## References

- [[Specs/auth_feature_updated.md]]
- [[Docs/oauth2_guide.md]]

---

**This prompt will be injected into the next iteration.**

Delete this file after it's been processed.
```

### Prompt Reinjection Logic

```python
def check_reinject_prompt(self):
    """Check for prompt reinjection"""
    
    # Only check every N iterations
    if self.iteration % self.config.check_reinject_every_n_iterations != 0:
        return None
    
    reinject_path = self.config.reinject_prompt_file
    
    if os.path.exists(reinject_path):
        # Read prompt
        with open(reinject_path, 'r') as f:
            prompt = parse_markdown(f.read())
        
        logger.info("Prompt reinjection detected", {
            "priority": prompt.get("priority", "normal"),
            "created": prompt.get("created")
        })
        
        # Delete file (consumed)
        os.remove(reinject_path)
        
        # Return prompt for injection
        return prompt
    
    return None

def inject_prompt(self, prompt):
    """Inject prompt into current context"""
    
    # Add to context
    self.context["reinjected_prompt"] = prompt["content"]
    self.context["reinjected_at"] = datetime.now().isoformat()
    
    # Log injection
    logger.info("Prompt injected into context", {
        "iteration": self.iteration,
        "prompt_length": len(prompt["content"])
    })
    
    # Update state
    self.state["last_prompt_injection"] = {
        "iteration": self.iteration,
        "timestamp": datetime.now().isoformat(),
        "prompt": prompt["content"][:200]  # First 200 chars
    }
```

