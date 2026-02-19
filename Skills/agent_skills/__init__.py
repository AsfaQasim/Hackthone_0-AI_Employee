"""
Agent Skills System

Modular AI skills for task processing. Each skill is a separate function
that can be imported and used independently.
"""

from .summarize_task import summarize_task
from .create_plan import create_plan
from .draft_reply import draft_reply
from .generate_linkedin_post import generate_linkedin_post

__all__ = [
    'summarize_task',
    'create_plan',
    'draft_reply',
    'generate_linkedin_post'
]

__version__ = '1.0.0'
