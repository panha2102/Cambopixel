# Publishing this branch (if the agent could not push)

If commits exist only on the agent VM:

```bash
# On a machine with push access to panha2102/Cambopixel
git fetch <path-to-angkor-vanguard-exe.bundle> cursor/angkor-vanguard-exe:cursor/angkor-vanguard-exe
git checkout cursor/angkor-vanguard-exe
git push -u origin cursor/angkor-vanguard-exe
gh pr create --base main --head cursor/angkor-vanguard-exe --title "Angkor Vanguard: Kulen Chronicle Windows build" --body-file <pr-body.md>
```

The project store may include `artifacts/angkor-vanguard-exe.bundle` and `artifacts/angkor-vanguard-pr-body.md` from the Cursor agent run.