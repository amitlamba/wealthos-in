# WealthOS marketing site — Make targets
# Uses Bun for install/run; use `make help` to list targets.
# Prepend common Bun locations to PATH so recipes find bun (Homebrew / official install).
export PATH := /opt/homebrew/bin:/usr/local/bin:$(HOME)/.bun/bin:$(PATH)

.PHONY: help install dev build start lint clean docker-build docker-run

# Default target
help:
	@echo "WealthOS marketing site — available targets:"
	@echo ""
	@echo "  make install      — install dependencies (bun install)"
	@echo "  make dev          — run dev server (bun run dev)"
	@echo "  make build       — production build (bun run build)"
	@echo "  make start       — run production server (bun start)"
	@echo "  make lint        — run ESLint (bun run lint)"
	@echo "  make clean       — remove .next and other build artifacts"
	@echo "  make docker-build — build Docker image (tag: wealthos-in)"
	@echo "  make docker-run  — run container on port 3000"
	@echo ""
	@echo "Requires Bun (https://bun.sh). Install: brew tap oven-sh/bun && brew install bun  OR  curl -fsSL https://bun.sh/install | bash"
	@echo ""

# Dependencies
install:
	@command -v bun >/dev/null 2>&1 || (echo "Bun not found. Install: brew tap oven-sh/bun && brew install bun  OR  curl -fsSL https://bun.sh/install | bash" && exit 1)
	bun install

# Development
dev:
	@command -v bun >/dev/null 2>&1 || (echo "Bun not found. Install: brew tap oven-sh/bun && brew install bun  OR  curl -fsSL https://bun.sh/install | bash" && exit 1)
	bun run dev

# Production build and run
build:
	@command -v bun >/dev/null 2>&1 || (echo "Bun not found. Install: brew tap oven-sh/bun && brew install bun  OR  curl -fsSL https://bun.sh/install | bash" && exit 1)
	bun run build

start:
	@command -v bun >/dev/null 2>&1 || (echo "Bun not found. Install: brew tap oven-sh/bun && brew install bun  OR  curl -fsSL https://bun.sh/install | bash" && exit 1)
	bun start

# Lint
lint:
	@command -v bun >/dev/null 2>&1 || (echo "Bun not found. Install: brew tap oven-sh/bun && brew install bun  OR  curl -fsSL https://bun.sh/install | bash" && exit 1)
	bun run lint

# Remove build output (keeps node_modules)
clean:
	rm -rf .next out

# Docker
DOCKER_IMAGE := wealthos-in

docker-build:
	docker build -t $(DOCKER_IMAGE) .

docker-run:
	docker run -p 3000:3000 $(DOCKER_IMAGE)
