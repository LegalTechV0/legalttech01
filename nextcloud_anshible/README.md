# 1. Update system packages and install Ansible
sudo apt update
sudo apt install -y ansible

# 2. Navigate to the project directory
cd ~/legalttech01/nextcloud_ansible

# 3. Run the Ansible playbook
ansible-playbook -i inventory.ini playbook.yml
