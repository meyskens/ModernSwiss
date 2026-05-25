# Swiss Square Justfile - Rebble SDK

# Default recipe - show available commands
default:
    @just --list

# Install dependencies (including @rebble/clay)
install:
    npm install

# Build the application for all platforms
build:
    pebble build

# Build for a specific platform
build-platform platform:
    pebble build --platform {{platform}}

# Clean build artifacts
clean:
    pebble clean

# Install on emulator (default: basalt for Pebble Time)
install-emulator platform="basalt": build
    pebble install --emulator {{platform}}

# Install on physical watch via phone
install-phone: build
    pebble install --phone

# Install on physical watch via cloudpebble
install-watch: build
    pebble install --cloudpebble

# Install and log on physical watch
install-log: build
    pebble install --phone && pebble logs

# Log output from watch
logs:
    pebble logs --cloudpebble

# Package the app for publishing
package: build
    pebble package

# Login to Pebble account
login:
    pebble login

# Logout from Pebble account
logout:
    pebble logout
