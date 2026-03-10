# Serghe.com Portfolio - Setup & Workflow Guide

**Last Updated:** March 10, 2026  
**Live Site:** https://serghe.com  
**GitHub:** https://github.com/marianserghe/marianserghe.github.io

---

## 📂 Overview

Your portfolio is a **static HTML/CSS/JS site** deployed via **GitHub Pages** with a custom domain (`serghe.com`).

---

## 🗂️ File Locations

### **Local Files (Your Mac)**

```
/Users/mybotserghe/Shared/Portfolios/Serghe/
├── v1-dark-gold/          ⭐ LIVE VERSION
│   ├── index.html         (Homepage)
│   ├── assets/            (CSS, JS, images, fonts)
│   ├── CNAME              (Custom domain: www.serghe.com)
│   └── .git/              (Git repository)
├── v2-bold-purple/        (Archive - not live)
├── v3-light-editorial/    (Archive - not live)
└── v4-bento-grid/         (Archive - not live)
```

**Only `v1-dark-gold/` is connected to GitHub and deployed live.**

---

### **GitHub Repository**

- **Repo:** `marianserghe/marianserghe.github.io`
- **URL:** https://github.com/marianserghe/marianserghe.github.io
- **Branch:** `main` (or `master`)
- **Service:** GitHub Pages

---

### **Live Website**

- **Primary:** https://serghe.com
- **Redirect:** https://marianserghe.github.io/ → serghe.com

---

## 🔄 How Updates Work

### **Manual Process Required**

**Files do NOT sync automatically!** You must manually commit and push changes.

### **Step-by-Step Workflow**

1. **Edit files locally:**
   ```bash
   cd /Users/mybotserghe/Shared/Portfolios/Serghe/v1-dark-gold/
   # Make your changes in index.html, CSS, etc.
   ```

2. **Check what changed:**
   ```bash
   git status          # See modified files
   git diff            # Preview changes
   ```

3. **Stage all changes:**
   ```bash
   git add -A          # Add all files
   ```

4. **Commit with message:**
   ```bash
   git commit -m "Updated Google Analytics tag"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

6. **Wait 1-2 minutes** for GitHub Pages to deploy

7. **Verify live site:** https://serghe.com

---

## ⚠️ Important Notes

### **No Automatic Sync**

- There's **no background process** syncing local files to GitHub
- Changes won't go live until you manually push
- You can edit locally as much as you want - nothing syncs until `git push`

### **GitHub Pages Deployment Time**

- **1-2 minutes** after push for site to update
- **Up to 5 minutes** for DNS/CDN cache to clear worldwide
- Use **Cmd+Shift+R** (hard refresh) to bypass browser cache

### **Only v1-dark-gold is Live**

- v2, v3, v4 are **archives** (not connected to GitHub)
- Only edit in `v1-dark-gold/` for live changes
- Can test other versions locally but they won't deploy

---

## ✅ What's Currently Live

### **Latest Change:**

**Date:** March 9, 2026  
**Update:** Google Analytics tag installed  
**ID:** G-QKMXT039HC

### **Files in Repo:**

- `index.html` - Homepage
- `assets/css/` - Stylesheets
- `assets/js/` - JavaScript
- `assets/images/` - Portfolio images
- `assets/fonts/` - Custom fonts
- `CNAME` - Custom domain configuration

---

## 🛠️ Quick Commands

### **Check Status**
```bash
cd /Users/mybotserghe/Shared/Portfolios/Serghe/v1-dark-gold
git status           # See pending changes
git log -3           # Last 3 commits
```

### **Commit & Push**
```bash
git add -A
git commit -m "Description of changes"
git push
```

### **Force Update (If Stuck)**
```bash
git pull origin main    # Get latest from GitHub
git push                # Push changes
```

---

## 📊 Analytics Setup

### **Google Analytics**

- **Measurement ID:** `G-QKMXT039HC`
- **Property:** serghe.com Portfolio
- **Status:** ✅ **LIVE & TRACKING**
- **View:** https://analytics.google.com

**Code in index.html:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QKMXT039HC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QKMXT039HC');
</script>
```

---

## 🎯 Typical Workflow

### **Making Design Changes:**

1. Open files in your editor (VS Code, etc.)
2. Edit HTML/CSS/JS
3. Preview locally (open index.html in browser)
4. When ready:
   ```bash
   git add -A
   git commit -m "Redesized hero section"
   git push
   ```
5. Wait 1-2 minutes
6. Check https://serghe.com

### **Adding Google Analytics (Example):**

1. Get Measurement ID from Google Analytics
2. Add code to `index.html`
3. Commit & push
4. Verify in GA Realtime report

---

## 🔍 Troubleshooting

### **Changes Not Appearing?**

1. **Check if pushed:**
   ```bash
   git log -1
   git status
   ```

2. **Check GitHub:**
   - Visit: https://github.com/marianserghe/marianserghe.github.io
   - See if your commit is there

3. **Hard refresh browser:**
   - Mac: `Cmd+Shift+R`
   - Windows: `Ctrl+Shift+R`

4. **Wait longer:**
   - GitHub Pages can take up to 5 minutes

### **Git Issues?**

```bash
# Reset to match GitHub
git fetch origin
git reset --hard origin/main
# Re-apply your changes
git add -A
git commit -m "Your changes"
git push
```

---

## 📁 Folder Structure

```
v1-dark-gold/
├── index.html          # Main page
├── CNAME               # Custom domain (www.serghe.com)
├── .git/               # Git config
├── .gitignore          # Files to exclude from git
└── assets/
    ├── css/
    │   └── style.css   # Main stylesheet
    ├── js/
    │   └── main.js     # JavaScript
    ├── images/
    │   ├── hero.jpg
    │   ├── projects/
    │   └── og-image.jpg # Social sharing image
    └── fonts/
        └── *.ttf/*.woff
```

---

## ✅ Checklist for Updates

**Before pushing:**
- [ ] Tested changes locally
- [ ] All files saved
- [ ] No broken links
- [ ] Images optimized (under 1MB)

**After pushing:**
- [ ] Commit appears on GitHub
- [ ] Site updates (wait 1-2 min)
- [ ] No 404 errors
- [ ] Analytics still working

---

## 📞 Support

**If something breaks:**
1. Check GitHub for your commit
2. Check browser console for errors
3. Check git status locally
4. Verify CNAME file is present

**Last tested:** March 10, 2026 - ✅ All systems working

---

*Created by Lyra for Hex - Portfolio setup documentation*
