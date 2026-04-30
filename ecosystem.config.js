module.exports = {
  apps: [
    {
      name: "oneitech",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
      cwd: __dirname,
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
    },
  ],
};
