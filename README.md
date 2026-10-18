TessBennett.com
================

Tess Bennett's Portfolio Website

## Build Dependencies
- imagemagic
- nodejs


## Local Development

### Set up syslink to img folder in Google Drive

1. In VM settings, share the "bennettreeves_com" folder from Google Drive
2. Create a directory to mount the shared folder to:

```bash
mkdir -p ~/vm_hgfs
```

3. Mount the shared folders:

```bash
sudo vmhgfs-fuse .host:/ ~/vm_hgfs -o allow_other -o uid=1000 -o gid=1000
```

4. Symlink the shared drive folder to ./cloud:

```bash
ln -s ~/vm_hgfs/bennettreeves_com ./cloud
```

5. Build images:

```bash
npm run gulp:img
```

### Build

```bash
npm run gulp:build
```

### Local Demo

```bash
npm run demo
```

## Deployment

```bash
npm run deploy
```
